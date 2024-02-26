BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Transaction] (
    [id] INT NOT NULL IDENTITY(1,1),
    [description] NVARCHAR(1000),
    [date] DATETIME2 NOT NULL CONSTRAINT [Transaction_date_df] DEFAULT CURRENT_TIMESTAMP,
    [amount] DECIMAL(32,16) NOT NULL,
    [type] INT NOT NULL,
    [consolidated] BIT NOT NULL CONSTRAINT [Transaction_consolidated_df] DEFAULT 0,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Transaction_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [Transaction_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Transaction_pkey] PRIMARY KEY CLUSTERED ([id])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
