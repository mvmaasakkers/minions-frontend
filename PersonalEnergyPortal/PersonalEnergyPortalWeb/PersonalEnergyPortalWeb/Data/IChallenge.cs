using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalEnergyPortalWeb.Data
{
    public interface IChallenge
    {
        int Identifier { get; }
        string Description { get; }
        int Points { get; }
    }
}
