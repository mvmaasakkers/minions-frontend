using System.Collections.Generic;

namespace PersonalEnergyPortalWeb.Data
{
    public interface IDataStorage
    {
        IAccount GetAccount(int identifier);
        IEnumerable<IAccount> GetAccounts();
        IEnumerable<IChallenge> GetChallenges();

    }
}