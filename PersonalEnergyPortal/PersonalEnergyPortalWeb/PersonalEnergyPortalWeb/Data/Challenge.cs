using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalEnergyPortalWeb.Data
{
    public class Challenge : IChallenge
    {
        public int Identifier { get; }

        public string Description { get; }

        public int Points { get; }

        internal Challenge(int identifier, string description, int points)
        {
            Identifier = identifier;
            Description = description;
            Points = points;
        }
    }
}
