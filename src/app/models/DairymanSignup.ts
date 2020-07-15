export class DairymanSignup {
  firstname: string;
  lastname: string;
  cnic: string;
  email: string;
  password: string;
  confirmpassword: string;
  phone: string;

  constructor(
    firstname: string,
    lastname: string,
    cnic: string,
    email: string,
    password: string,
    confirmpassword: string,
    phone: string
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.cnic = cnic;
    this.email = email;
    this.password = password;
    this.confirmpassword = confirmpassword;
    this.phone = phone;
  }
}
