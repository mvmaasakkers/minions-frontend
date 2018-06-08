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
        private IEnumerable<IEvent> _eventlist;
        internal Account(int identifier, string name, IEnumerable<IEvent> events)
        {
            Identifier = identifier;
            Name = name;
            _eventlist = events;
        }
    }
}
