using Labora.Data.DataEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Labora.Controllers
{
    public class CountryController : Controller
    {
        private readonly DataCountry _dataCountry = new DataCountry();
        // GET: Contry
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult ListCountry()
        {
            var resultado = _dataCountry.ListCountry();
            return Json(resultado);
        }
    }
}