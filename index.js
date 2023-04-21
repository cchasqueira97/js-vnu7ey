User:
type: object
required:
  - id
  - name
  - email
  - dateOfBirth
  - securityQuestion
properties:
  id:
    type: integer
    format: int64
    description: Unique identifier for the user
  name:
    type: string
    description: User's name
  email:
    type: string
    description: User's email address
  dateOfBirth:
    type: string
    format: date
    description: User's date of birth in the format YYYY-MM-DD
  securityQuestion:
    type: string
    description: User security question