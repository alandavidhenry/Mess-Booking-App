export class BookRoom {
  key?: string | null;
  // serviceNumber?: string;
  // firstName?: string;
  // lastName?: string;
  reasonForStay?: string;
  arrivalDate?: string;
  arrivalTime?: string;
  departureDate?: string;
  departureTime?: string;
  bedding: string = 'Yes';
  bringingGuests: string = 'No';
  guestTitle?: string;
  guestName?: string;
  roomType: string = 'Single Bunk';
  POCDetails?: string = 'Same';
  POCServiceNumber?: string;
  POCRank?: string;
  POCFirstName?: string;
  POCLastName?: string;
  POCUnit?: string;
  POCContactNumber?: string;
  POCEmail?: string;
  checkRules: boolean = false;
}
