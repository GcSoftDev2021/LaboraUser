using Labora.Data.DataEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Labora.Controllers
{
    public class RegisterController : Controller
    {
        readonly DataRegister _dataRegister = new DataRegister();
        // GET: Register
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult Register(string Email, string Password)
        {
            string Result = _dataRegister.Register(Email, Password);
            return Json(Result);
        }
    }
}