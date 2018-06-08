using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalEnergyPortalWeb.Data
{
    public class ChallengeProgress : IChallengeProgress
    {
        public int ChallengeIdentifier { get; }

        public float Progress { get; }

        internal ChallengeProgress(int challengeIdentifier, float progress)
        {
            ChallengeIdentifier = challengeIdentifier;
            Progress = progress;

        }
    }
}
