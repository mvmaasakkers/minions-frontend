using System.Collections.Generic;

public interface IDataStorage
{
    IAccount GetAccount(int identifier);
    IEnumerable<IAccount> GetAccounts();
    
}