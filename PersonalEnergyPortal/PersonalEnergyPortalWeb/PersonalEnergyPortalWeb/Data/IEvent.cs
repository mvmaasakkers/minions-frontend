using System;

public interface IEvent
{
    int Identifier{get;}
    DateTime Date { get; }
    string Description{get;}
    int Points{get;}
}