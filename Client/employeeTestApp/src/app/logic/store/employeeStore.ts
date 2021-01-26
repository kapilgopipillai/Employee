import { BaseStore } from './baseStore';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY, of } from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';
import { apiBaseUrl, defaultId } from '../../../environments/environment';
import { EmployeeState } from '../state/employeeState';
import { IEmployeeModel } from '../model/IEmployeeModel';
import { IEntryListModel } from '../model/IEntryListModel';

@Injectable()
export class Employeetore extends BaseStore<EmployeeState> {
    private _entryType: string = 'Employee';

    constructor(private _http: HttpClient) {
      super(new EmployeeState());
    }

    get listData$(): Observable<IEmployeeModel[]> {
      return this.state$.pipe(map(state => state.list.data));
    }

    get listIsBusy$(): Observable<boolean> {
      return this.state$.pipe(map(state => state.list.isBusy));
    }

    get listCount$(): Observable<number> {
      return this.state$.pipe(map(state => state.list.count));
    }

    get entryIsBusy$(): Observable<boolean> {
      return this.state$.pipe(map(state => state.entry.isBusy));
    }

    public loadEmployees(): Observable<void> {

      // this.notificationService.clear(this._entryType);
      this.setState({
        ...this.state,
        list: {
          ...this.state.list,
          isBusy: true
        }
      });

      return this._http.get<IEmployeeModel[]>(apiBaseUrl + 'Employee', { responseType: 'json', observe: 'body' })
        .pipe(
          map(res => {
            debugger;
            this.setState({
              ...this.state,
              list: {
                ...this.state.list,
                data: res,
                count: res.length
              }
            });
          }),
          catchError((ex) => {
            // this.notificationService.error(HttpErrorResponse2Notification(ex), this._entryType);
            return EMPTY;
          }),
          finalize(() => {
            this.setState({
              ...this.state,
              list: {
                ...this.state.list,
                isBusy: false
              }
            });
          })
        );
    }

    public loadEmployee(id: string): Observable<boolean> {
      // this.notificationService.clear(this._entryType);
      if (id === defaultId) {
        let Employee = <IEmployeeModel>{ id: defaultId };
        this.setState({
          ...this.state,
          entry: {
            ...this.state.entry,
            data: Employee
          }
        });
        return of(true);
      }
      else {
        this.setState({
          ...this.state,
          list: {
            ...this.state.list,
            isBusy: true
          },
          entry: {
            ...this.state.entry,
            isBusy: true
          }
        });
        return this._http.get<IEmployeeModel>(apiBaseUrl + 'Employee/' + id, { responseType: 'json', observe: 'body' })
          .pipe(
            map(res => {
              this.setState({
                ...this.state,
                entry: {
                  ...this.state.entry,
                  data: res
                }
              });
              return true;
            }),
            catchError((ex) => {
              // this.notificationService.error(HttpErrorResponse2Notification(ex), this._entryType);
              return of(false);
            }),
            finalize(() => {
              this.setState({
                ...this.state,
                list: {
                  ...this.state.list,
                  isBusy: false
                },
                entry: {
                  ...this.state.entry,
                  isBusy: false
                }
              });
            })
          );
      }
    }

    public createEmployee(emp: IEmployeeModel): Observable<boolean> {

      // this.notificationService.clear(this._entryType);
      this.setState({
        ...this.state,
        entry: {
          ...this.state.entry,
          isBusy: true
        }
      });
      return this._http.post<IEmployeeModel>(apiBaseUrl + 'Employee', emp, { responseType: 'json', observe: 'body' }).
        pipe(
          map((res) => {
            this.setState({
              ...this.state,
              entry: {
                ...this.state.entry,
                data: res
              }
            });
            // this.notificationService.success('Unit of measure successfully created', this._entryType);
            return true;
          }),
          catchError((ex) => {
            // this.notificationService.error(HttpErrorResponse2Notification(ex), this._entryType);
            return of(false);
          }),
          finalize(() => {
            this.setState({
              ...this.state,
              entry: {
                ...this.state.entry,
                isBusy: false
              }
            });
          })
        );
    }

    public updateEmployee(emp: IEmployeeModel): Observable<boolean> {
      // this.notificationService.clear(this._entryType);
      this.setState({
        ...this.state,
        entry: {
          ...this.state.entry,
          isBusy: true
        }
      });
      return this._http.put(apiBaseUrl + 'Employee', emp, { responseType: 'json', observe: 'response' }).
        pipe(
          map((res) => {
            this.setState({
              ...this.state,
              entry: {
                ...this.state.entry,
                data: emp
              }
            });
            // this.notificationService.success('Unit of measure successfully updated', this._entryType);
            return true;
          }),
          catchError((ex) => {
            // this.notificationService.error(HttpErrorResponse2Notification(ex), this._entryType);
            return of(false);
          }),
          finalize(() => {
            this.setState({
              ...this.state,
              entry: {
                ...this.state.entry,
                isBusy: false
              }
            });
          })
        );
    }

    public deleteEmployee(id: string): Observable<boolean> {
      // this.notificationService.clear(this._entryType);
      this.setState({
        ...this.state,
        list: {
          ...this.state.list,
          isBusy: true
        }
      });
      return this._http.delete(apiBaseUrl + 'Employee/' + id, { responseType: 'json', observe: 'response' })
        .pipe(
          map((res) => { return true }),
          catchError((ex) => {
            // this.notificationService.error(HttpErrorResponse2Notification(ex), this._entryType);
            return of(false);
          }),
          finalize(() => {
            this.setState({
              ...this.state,
              list: {
                ...this.state.list,
                isBusy: false
              }
            });
          })
        );
    }

    public disposeList(): void {
      this.setState({
        ...this.state,
        list: {
          ...this.state.list,
          count: 0,
          data: [],
          isBusy: false
        }
      });
    }

    public disposeEntry(): void {
      this.setState({
        ...this.state,
        entry: {
          ...this.state.entry,
          data: {} as IEmployeeModel,
          isBusy: false
        }
      });
    }
  }
