
export interface PasswordConfig {
    LimitPasswordReuse?: number
    MaxConsecutiveDupeChars?: number
    MaximumPasswordAge?: number
    MinimumPasswordAge?: number
    AllowedFailedAttempts?: number
    LockoutDuration?: number
    UpperCaseRequired?: boolean
    LowerCaseRequired?: boolean
    SpecialCharacterRequired?: boolean
    NumericRequired?: boolean
    MinimumCharacterCount?: number
}