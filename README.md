# Testa Gava Farmer Digital ID Infrastructure

## Overview

Testa Gava is a simple web application designed to make offers to issue and verify verifiable digital credentials to farmers. This lightweight, single-page application interfaces with a Walt.id credential issuance service to provide farmers with portable digital identities.

## Features

- **Simple one-page interface**: Easy to use on basic devices
- **Digital credential issuance**: Issues W3C Verifiable Credentials
- **Selective disclosure support**: Allows the sharing of only specific information
- **Mobile-friendly design**: Works on smartphones, tablets, and desktops

## Technical Details

- HTML, CSS, and vanilla JavaScript (no frameworks)
- Integrates with Walt.id for credential issuance
- Uses W3C Verifiable Credentials and DID standards
- Implements Selective Disclosure JWT (SD-JWT)

## How to Use

## Issuance

### For Farmers

1. **Access the application**: Open the `issuer/index.html` file or `linkFulaniInakam` in any web browser

2. **Request your digital ID**:
   - Click the "Issue My Digital ID" button
   - Wait for processing (a few seconds)

3. **Receive your credential**:
   - A success message will appear
   - Your credential link will be displayed (starting with "openid-credential:")

4. **Copy your credential**:
   - Click the "Copy Link" button
   - Or manually select and copy the link text

5. **Import to wallet**:
   - Open any compatible digital wallet application
   - Use the import/scan feature
   - Paste the copied credential link

### For Administrators

#### Setup

1. **Configuration**:
   - Edit the HTML file to point to your Walt.id service endpoint
   - Update the credential template as needed

2. **Walt.id Integration**:
   - The application connects to a Walt.id instance at the specified endpoint
   - Ensure your Walt.id server is properly configured for SD-JWT issuance
   - Default endpoint: `http://139.59.15.151:7002/openid4vc/sdjwt/issue`

3. **Deployment**:
   - Host on any web server or open directly in a browser for testing
   - No database required (stateless application)

## Troubleshooting

### Common Issues

1. **Connection Error**:
   - Verify your Walt.id server is running
   - Check network connectivity

2. **Credential Not Showing**:
   - Ensure the Walt.id service is returning valid credentials
   - Check browser console for JavaScript errors

## Security Notes

- Credentials contain personal information; only share with trusted services
- This implementation uses sample data; customize for production use

---

&copy; 2025 Testa Gava
