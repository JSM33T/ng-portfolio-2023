using Almondcove.Entities.Dedicated.Auth;
using FluentValidation;

namespace Almondcove.Validators
{
    public class SignupRequestValidator : AbstractValidator<SignupRequest>
    {
        public SignupRequestValidator()
        {
            RuleFor(x => x.Username)
                   .NotEmpty().WithMessage("The Username field is required.")
                   .MinimumLength(3).WithMessage("The Username must be at least 3 characters long.");

            RuleFor(x => x.Password)
                .NotEmpty().WithMessage("The Password field is required.")
                .MinimumLength(6).WithMessage("The Password must be at least 6 characters long.");
        }
    }
   
}
