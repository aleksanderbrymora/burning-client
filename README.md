# Data for the views

## Admin only

### Create flight
SHOW: localhost:3000/flight/new

Response:
- flight number
- origin
- destination,
- date
- plane id

### Create airplane
SHOW: localhost:3000/airplane/new

Response:
- name
- rows
- columns

## Available to everyone
### Flight search
SHOW: localhost:3000/

Response:
- Flights from
- Flights to

### Flights show page
SHOW: localhost:3000/{origin}/{destination}

Response:
- flight number
- date
- plane
- seats taken by existing reservations

# Pages in navbar

| Home | react | localhost:3000 |
