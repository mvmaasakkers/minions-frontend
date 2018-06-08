using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using PersonalEnergyPortalWeb.Data;

namespace PersonalEnergyPortalWeb.Pages
{
    public class Account
    {
        public string Name;
       public  int Identifier;
    }

    public class IndexModel : PageModel
    {
        public List<Account> Accounts;

        public void OnGet()
        {
            var DataStore = new DataStorage();
            Accounts = new List<Account>();
            foreach (var acc in DataStore.GetAccounts())
            {
                Accounts.Add(new Account() { Name = acc.Name, Identifier = acc.Identifier });
            }
        }
    }
}
