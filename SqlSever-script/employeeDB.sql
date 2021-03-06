USE [EmployeeTest]
GO
/****** Object:  Table [dbo].[Employee]    Script Date: 26/01/2021 03:24:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employee](
	[Id] [uniqueidentifier] NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[Description] [varchar](50) NULL,
	[PhoneNumber] [varchar](50) NULL,
	[City] [varchar](50) NULL,
	[State] [varchar](50) NULL,
	[Notes] [varchar](50) NULL,
	[EmailAddress] [varchar](50) NULL,
	[Address] [varchar](50) NULL,
	[PostalCode] [varchar](50) NULL,
	[Disabled] [bit] NULL,
	[Created] [datetime] NULL,
	[CreatedBy] [varchar](50) NULL,
	[Modified] [datetime] NULL,
	[ModifiedBy] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Employee] ADD  DEFAULT (newid()) FOR [Id]
GO
/****** Object:  StoredProcedure [dbo].[DeleteEmployee]    Script Date: 26/01/2021 03:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[DeleteEmployee]  
  @Id [uniqueidentifier]  
AS  
BEGIN  
  DELETE FROM [dbo].[Employee]  
  WHERE [Id] = @Id  
END
GO
/****** Object:  StoredProcedure [dbo].[GetAllEmployee]    Script Date: 26/01/2021 03:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetAllEmployee]  
AS  
BEGIN  
 SELECT [s].[Id],  
      [s].[Name],  
     [s].[Description],    
     [s].[EmailAddress],  
     [s].[PhoneNumber],  
     [s].[Address],    
     [s].[City],  
     [s].[State],  
     [s].[PostalCode],  
     [s].[Notes],  
     [s].[Disabled],  
     [s].[Created],   
     [s].[CreatedBy],  
     [s].[Modified],  
     [s].[ModifiedBy]  
 FROM [dbo].[Employee] [s] 
END  
GO
/****** Object:  StoredProcedure [dbo].[GetEmployee]    Script Date: 26/01/2021 03:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetEmployee]  
  @Id [uniqueidentifier]  
AS  
BEGIN  
 SELECT [s].[Id],  
      [s].[Name],  
     [s].[Description],    
     [s].[EmailAddress],  
     [s].[PhoneNumber],  
     [s].[Address],    
     [s].[City],  
     [s].[State],  
     [s].[PostalCode],  
     [s].[Notes],  
     [s].[Disabled],  
     [s].[Created],   
     [s].[CreatedBy],  
     [s].[Modified],  
     [s].[ModifiedBy]  
 FROM [dbo].[Employee] [s]   
 WHERE [s].[Id] = @Id  
END  
GO
/****** Object:  StoredProcedure [dbo].[InsertEmployee]    Script Date: 26/01/2021 03:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[InsertEmployee]  
 (  
  @Name [nvarchar](50),    
  @Description [nvarchar](300),  
  @EmailAddress [nvarchar](100), 
  @PhoneNumber [nvarchar](50),  
  @Address [nvarchar](100),   
  @City [nvarchar](100),  
  @State [nvarchar](50),  
  @PostalCode [nvarchar](20),  
  @Notes [nvarchar](max),  
  @Disabled [bit]  ,

  @Created [datetime],
  @CreatedBy [nvarchar](50), 
  @Modified [datetime],
  @ModifiedBy [nvarchar](50) 
 )  
AS  
SET NOCOUNT ON  
BEGIN  
 DECLARE @NewID uniqueidentifier = NEWID()  
 INSERT INTO [dbo].[Employee]  
 (  
  [Id], [Name], [Description], [EmailAddress], [PhoneNumber], [Address], [City], [State], [PostalCode], [Notes], [Disabled]  ,[Created], [CreatedBy], [Modified], [ModifiedBy]
 )  
 VALUES  
 (  
  @NewID,  
  @Name,  
  @Description,    
  @EmailAddress, 
  @PhoneNumber,  
  @Address,   
  @City,  
  @State,  
  @PostalCode,   
  @Notes,  
  @Disabled,
  @Created,
  @CreatedBy,
  @Modified,
  @ModifiedBy
 )   
 SELECT @NewID  
END  
GO
/****** Object:  StoredProcedure [dbo].[UpdateEmployee]    Script Date: 26/01/2021 03:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdateEmployee]  
 (  
  @Id [uniqueidentifier],
  @Name  [nvarchar](50),    
  @Description [nvarchar](300),  
  @EmailAddress [nvarchar](100), 
  @PhoneNumber [nvarchar](50),  
  @Address [nvarchar](100),   
  @City  [nvarchar](100),  
  @State  [nvarchar](50),  
  @PostalCode [nvarchar](20),    
  @Notes  [nvarchar](max),  
  @Disabled [bit] ,  
  
  @Created [datetime],  
  @CreatedBy [nvarchar](50),   
  @Modified [datetime],  
  @ModifiedBy [nvarchar](50)  
 )  
AS  
SET NOCOUNT ON  
BEGIN  


 UPDATE [dbo].[Employee]  
  SET [Name] = @Name, [Description] = @Description, [EmailAddress] = @EmailAddress, [PhoneNumber] = @PhoneNumber, [Address] = @Address, [City] = @City, [State] = @State, [PostalCode] = 
@PostalCode, [Notes] = @Notes, [Disabled] = @Disabled, Modified = @Modified, ModifiedBy =  @ModifiedBy
  
  WHERE [Id] = @Id 



  
  
END  
GO
