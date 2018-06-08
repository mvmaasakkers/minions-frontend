using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalEnergyPortalWeb.Data
{
    public class DataStorage : IDataStorage
    {
        private List<Account> _accounts;
        private List<Challenge> _challenges;
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

        public IEnumerable<IChallenge> GetChallenges()
        {
            return (_challenges);
        }

        public DataStorage()
        {
            CreateAccount("Bob",new List<PEPEvent>(), new List<ChallengeProgress>());

            var eventlist1 = new List<PEPEvent>();
            eventlist1.Add(new PEPEvent(1, new DateTime(2018,06,01),"Goal achieved: saved 10 euros on energy~!",10));

            CreateAccount("Elise", eventlist1, new List<ChallengeProgress>());

            var eventlist2 = new List<PEPEvent>();
            eventlist2.Add(new PEPEvent(1, new DateTime(2018, 05, 01), "Goal achieved: Installed a smart saving lamp!", 5));
            eventlist2.Add(new PEPEvent(2, new DateTime(2018, 06, 01), "Goal achieved: Installed a smart saving lamp!", 5));
            eventlist2.Add(new PEPEvent(3, new DateTime(2018, 06, 05), "Points spent: From 1/7/2018 to 31/7/2018 you save .1% (E 1.23) on your mortgage!", -10));

            var challengelist2 = new List<ChallengeProgress>();

            challengelist2.Add(new ChallengeProgress(1,25));

            CreateAccount("Freddie", eventlist2, challengelist2);

            CreateChallenge("Save 10 euros on energy",10);
            CreateChallenge("Install a smart saving lamp", 5);
            CreateChallenge("Be more energy efficient compared to comparable people", 20);
        }

        private void CreateChallenge(string description, int points)
        {
            if(_challenges == null)
                _challenges = new List<Challenge>();
            _challenges.Add(new Challenge(_challenges.Count + 1, description, points));

        }
 
        private void CreateAccount(string Name, IEnumerable<IEvent> eventList, IEnumerable<IChallengeProgress> challengeList)
        {
            if(_accounts == null)
                _accounts = new List<Account>();

            _accounts.Add(new Account(_accounts.Count + 1, Name, eventList, challengeList));
        }
    }
}
