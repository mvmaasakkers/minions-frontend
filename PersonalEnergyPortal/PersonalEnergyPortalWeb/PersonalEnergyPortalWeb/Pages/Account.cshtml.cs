using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using PersonalEnergyPortalWeb.Data;

namespace PersonalEnergyPortalWeb.Pages
{
    public class EventPage
    {
        public int Identifier;
        public string Date;
        public string Description;
        public int Points;
    }
    public class AccountModel : PageModel
    {
        public string Name;
        public int Points;

        public List<EventPage> Events;

        public void OnGet(int id)
        {
            var DataStore = new DataStorage();
            var account = DataStore.GetAccount(id);
            Name = account.Name;
            Points = account.Points;
            Events = new List<EventPage>();
            foreach(var eve in account.GetEvents())
            {
                Events.Add(new EventPage() { Identifier = eve.Identifier, Date = string.Format("{0:dd-MM-yyyy}",eve.Date), Description = eve.Description, Points = eve.Points });
            }
        }
    }
}