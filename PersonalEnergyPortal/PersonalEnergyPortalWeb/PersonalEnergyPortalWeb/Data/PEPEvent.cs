using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalEnergyPortalWeb.Data
{
    public class PEPEvent : IEvent
    {
        public int Identifier { get; }

        public string Description { get; }

        public int Points { get; }

        public DateTime Date { get; }

        internal PEPEvent(int identifier, DateTime date, string description, int points)
        {
            Identifier = identifier;
            Description = description;
            Points = points;
            Date = date;
        }
    }
}
