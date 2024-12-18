Schemas for waranty management system :

-> Three Applications(User,Customer care, Admins):

    User :logs in, forgot password
         : Enters the serial number of the product and check the waranty status and download the bill.
         : Enters the serial number and can request a claim for it(Gets a Email).
         : Email thread integration to witness the User mail.
         : A Tracker component to track his claim.
            :along with contact feature.
            :and mailing feature.
         : ChatBot
         :Extend a waranty by paying and downloading the bill
         : Profile Page  
    
    Customer Care : Login
         : List of all assigned Claims
         : Email thread integration to witness the User mail
         : Assign a ticket to some other employees. 
         : Manage the claims of the user and close the ticket.

    Admin : Manage Users and Customer Care members.
          : Map Product to Users.
          : Add Product and Manage cost.

-> Integrations:

    Google Signin(OAuth), Gmail compose and threading , RazonPay, PDF maker, Two-factor Auth (Customer care)

Users :
    UserId
    Username
    Password
    Email
    Role
    CreatedOn

Product :
    ProductId
    ProductName
    Category
    Description
    PurchaseDate
    WarrantyPeriod
    UserId
    CreatedOn

SerialProducts:
    SerialNumber
    ProductId
    ProductImage
    MetaData
    {
        color:red
        model:{}
    }

Claims :
    ClaimId
    UserId
    SerialNumber
    Description
    Meta{    
        priority:{Low, Medium,High},
        read:boolean
        color:random
        }
    ClaimDate
    Status
    ResolvedMessage
    ResolutionDate
    ResolvedBy(UserId)

Assigned :
    AssignId
    ClaimId
    AssignTo(UserId)
    AssignBy(UserId)
    Message
    AssignedOn
    ClosedOn

Waranty :
    WarantyId
    SerialNumber
    StartDate
    EndDate
    Cost

WarantyPurchased:
    WarantyId
    UserId
    Amount
    Source
    PayedOn