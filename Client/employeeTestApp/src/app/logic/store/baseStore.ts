import { Observable, BehaviorSubject } from "rxjs";

export class BaseStore<TState> {
  state$: Observable<TState>;
  private _state$: BehaviorSubject<TState>;

  protected constructor(initialState: TState) {
    this._state$ = new BehaviorSubject(initialState);
    this.state$ = this._state$.asObservable();
  }

  get state(): TState {
    return this._state$.getValue();
  }

  setState(nextState: TState): void {
    this._state$.next(nextState);
  }
}
