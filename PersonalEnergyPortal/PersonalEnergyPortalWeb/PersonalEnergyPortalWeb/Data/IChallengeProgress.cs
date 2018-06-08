using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalEnergyPortalWeb.Data
{
    public interface IChallengeProgress
    {
        int ChallengeIdentifier { get; }
        float Progress { get; }
    }
}
