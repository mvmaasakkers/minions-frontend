using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalEnergyPortalWeb.Data
{
    public class Account : IAccount
    {
        public int Identifier { get; }

        public string Name { get; }

        public int Points { get { return _eventlist.Sum(e => e.Points); } }

        public IEnumerable<IEvent> GetEvents()
        {
            return (_eventlist);
        }

        public IEnumerable<IChallengeProgress> GetChallenges()
        {
            return _challengelist;
        }

        private IEnumerable<IEvent> _eventlist;
        private IEnumerable<IChallengeProgress> _challengelist;
        internal Account(int identifier, string name, IEnumerable<IEvent> events, IEnumerable<IChallengeProgress> challenges)
        {
            Identifier = identifier;
            Name = name;
            _eventlist = events;
            _challengelist = challenges;
        }
    }
}
