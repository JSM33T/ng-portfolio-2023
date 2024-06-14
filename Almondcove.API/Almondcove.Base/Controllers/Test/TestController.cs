using Almondcove.Entities.Dedicated.Auth;
using Almondcove.Entities.Shared;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace Almondcove.Base.Controllers.Test
{
    [Route("api/test")]
    [ApiController]
    public class TestController : FoundationController
    {
        private readonly IOptionsMonitor<AlmondcoveConfig> _config;
        public TestController(IOptionsMonitor<AlmondcoveConfig> config)
        {
            _config = config;
        }

        [HttpPost("sample")]
        public ActionResult<APIResponse<int>> GetSampleData(LoginRequest loginRequest)
        {
            return AcResponse(200, "Data retrieved successfully",0,null);
        }
    }
}
