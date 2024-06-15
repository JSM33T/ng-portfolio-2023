using Google.Apis.Auth;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Almondcove.Base.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        private readonly string _clientId = "";
        private readonly string _jwtSecret = "";

        [HttpPost("google")]
        public async Task<IActionResult> GoogleLogin([FromBody] GoogleLoginDto dto)
        {
            try
            {
                var payload = await GoogleJsonWebSignature.ValidateAsync(dto.Token, new GoogleJsonWebSignature.ValidationSettings
                {
                    Audience = new[] { _clientId }
                });

                var claims = new[]
                {
                new Claim(JwtRegisteredClaimNames.Sub, payload.Subject),
                new Claim(JwtRegisteredClaimNames.Email, payload.Email)
            };

                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtSecret));
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                var token = new JwtSecurityToken(
                    issuer: "https//localhost:4200",
                    audience: "https://localhost:4200",
                    claims: claims,
                    expires: DateTime.Now.AddDays(1),
                    signingCredentials: creds);

                var jwtToken = new JwtSecurityTokenHandler().WriteToken(token);
                return Ok(new { token = jwtToken });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = "Invalid Google token", error = ex.Message });
            }
        }
    }

    public class GoogleLoginDto
    {
        public string Token { get; set; }
    }
}
