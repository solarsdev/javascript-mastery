// 정직원과 파트타임 직원을 나타낼 수 있는 클래스를 만들어보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원
class Employee {
  _name;
  _departmentName;
  _monthlyWorkingHour;
  _payForWorkingHour;

  constructor(name, departmentName, monthlyWorkingHour, payForWorkingHour) {
    this._name = name;
    this._departmentName = departmentName;
    this._monthlyWorkingHour = monthlyWorkingHour;
    this._payForWorkingHour = payForWorkingHour;
  }

  get name() {
    return this._name;
  }

  get departmentName() {
    return this._departmentName;
  }
  get monthlyWorkingHour() {
    return this._monthlyWorkingHour;
  }

  get payForWorkingHour() {
    return this._payForWorkingHour;
  }

  get salary() {
    return this.monthlyWorkingHour * this.payForWorkingHour;
  }
}

class EmployeeFullTime extends Employee {
  static #PAY_FOR_WORKING_HOUR = 10000;

  constructor(name, departmentName, monthlyWorkingHour) {
    super(
      name,
      departmentName,
      monthlyWorkingHour,
      EmployeeFullTime.#PAY_FOR_WORKING_HOUR
    );
  }
}

class EmployeePartTime extends Employee {
  static #PAY_FOR_WORKING_HOUR = 8000;

  constructor(name, departmentName, monthlyWorkingHour) {
    super(
      name,
      departmentName,
      monthlyWorkingHour,
      EmployeePartTime.#PAY_FOR_WORKING_HOUR
    );
  }
}

const fulltime = new EmployeeFullTime('이상국', '엔지니어링', 720);
console.log(fulltime.salary);
