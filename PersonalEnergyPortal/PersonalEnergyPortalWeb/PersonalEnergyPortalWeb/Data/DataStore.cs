using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalEnergyPortalWeb.Data
{
    public class DataStorage : IDataStorage
    {
        private List<Account> _accounts;
        public IAccount GetAccount(int identifier)
        {
            var account = _accounts.FirstOrDefault(a => a.Identifier == identifier);
            if(account == null)
                throw new ArgumentOutOfRangeException(String.Format("{0} does not exist in data storage",identifier));
            return account;
        }

        public IEnumerable<IAccount> GetAccounts()
        {
            return (_accounts);
        }

        public DataStorage()
        {
            _accounts = new List<Account>();
            _accounts.Add(new Account(1, "Bob",new List<PEPEvent>()));

            var eventlist1 = new List<PEPEvent>();
            eventlist1.Add(new PEPEvent(1,new DateTime(2018,06,01),"Goal achieved: saved 10 euros on energy~!",10));

            _accounts.Add(new Account(2,"Elise", eventlist1));

            var eventlist2 = new List<PEPEvent>();
            eventlist2.Add(new PEPEvent(1, new DateTime(2018, 05, 01), "Goal achieved: Installed a smart saving lamp!", 5));
            eventlist2.Add(new PEPEvent(2, new DateTime(2018, 06, 01), "Goal achieved: Installed a smart saving lamp!", 5));
            eventlist2.Add(new PEPEvent(3, new DateTime(2018, 06, 05), "Points spent: From 1/7/2018 to 31/7/2018 you save .1% (E 1.23) on your mortgage!", -10));

            _accounts.Add(new Account(3,"Freddie", eventlist2));
        }
    }
}
