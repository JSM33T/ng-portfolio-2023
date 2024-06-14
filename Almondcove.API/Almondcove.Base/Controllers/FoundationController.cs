using Almondcove.Entities.Shared;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Almondcove.Base.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoundationController : ControllerBase
    {
        protected ActionResult<APIResponse<T>> AcResponse<T>(int status, string message, T data, List<string> errors = null)
        {
            return new APIResponse<T>(status, message, data, errors);
        }
    }
}
