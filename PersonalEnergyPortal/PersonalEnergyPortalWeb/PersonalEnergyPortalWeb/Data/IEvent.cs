using System;

namespace PersonalEnergyPortalWeb.Data
{
    public interface IEvent
    {
        int Identifier { get; }
        DateTime Date { get; }
        string Description { get; }
        int Points { get; }
    }
}