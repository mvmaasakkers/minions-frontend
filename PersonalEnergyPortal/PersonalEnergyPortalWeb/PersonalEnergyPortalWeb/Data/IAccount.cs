using PersonalEnergyPortalWeb.Data;
using System.Collections.Generic;

namespace PersonalEnergyPortalWeb.Data
{
    public interface IAccount
    {
        int Identifier { get; }
        string Name { get; }
        int Points { get; }
        IEnumerable<IEvent> GetEvents();
        IEnumerable<IChallengeProgress> GetChallenges();
    }
}