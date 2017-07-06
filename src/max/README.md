# Max OSC Receiver

Receiver application for send OSC messages.


## Technical Requirements

### Dependencies

Ensure you have a [Max](https://cycling74.com/products/max/) installed on your machine.


## Settings

### Environment Variables

The application requires only one dynamic value at this time: the port at which the services will send the OSC data. Match this port with the `REMOTE_PORT` value in the `.env` file at the root of the `src/node` directory.