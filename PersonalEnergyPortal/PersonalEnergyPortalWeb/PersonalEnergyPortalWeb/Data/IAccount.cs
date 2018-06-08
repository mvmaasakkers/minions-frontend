using System.Collections.Generic;

public interface IAccount
{
    int Identifier {get;}
    string Name { get; }
    int Points {get;}
    IEnumerable<IEvent> GetEvents();
}