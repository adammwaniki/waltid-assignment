document.addEventListener('DOMContentLoaded', function() {
    const issueButton = document.getElementById('issueCredential');
    const statusDiv = document.getElementById('status');
    const credentialDetailsDiv = document.getElementById('credentialDetails');
    // Helper function to create a copyable link element
    function createLinkElement(link) {
        const linkContainer = document.createElement('div');
        
        const instructions = document.createElement('p');
        instructions.textContent = 'Your credential is ready. Please copy the link below to access your digital ID:';
        
        const linkBox = document.createElement('div');
        linkBox.className = 'link-box';
        linkBox.textContent = link;
        
        const copyIndicator = document.createElement('div');
        copyIndicator.className = 'copy-indicator';
        copyIndicator.textContent = 'Copied!';
        linkBox.appendChild(copyIndicator);
        
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.textContent = 'Copy Link';
        copyBtn.onclick = function() {
            navigator.clipboard.writeText(link).then(function() {
                copyIndicator.style.display = 'block';
                setTimeout(function() {
                    copyIndicator.style.display = 'none';
                }, 2000);
            });
        };
        
        const note = document.createElement('p');
        note.innerHTML = '<strong>Note:</strong> You may need to open this link in a compatible wallet app to store your digital ID.';
        
        linkContainer.appendChild(instructions);
        linkContainer.appendChild(linkBox);
        linkContainer.appendChild(copyBtn);
        linkContainer.appendChild(note);
        
        return linkContainer;
    }
    issueButton.addEventListener('click', async function() {
        // Update UI to indicate processing
        issueButton.disabled = true;
        statusDiv.className = 'loading';
        statusDiv.textContent = 'Processing your request...';
        statusDiv.style.display = 'block';
        credentialDetailsDiv.style.display = 'none';
        try {
            // Prepare the request payload
            const payload = {
                "issuerKey": {
                    "type": "jwk",
                    "jwk": {
                        "kty": "EC",
                        "x": "SgfOvOk1TL5yiXhK5Nq7OwKfn_RUkDizlIhAf8qd2wE",
                        "y": "u_y5JZOsw3SrnNPydzJkoaiqb8raSdCNE_nPovt1fNI",
                        "crv": "P-256",
                        "d": "UqSi2MbJmPczfRmwRDeOJrdivoEy-qk4OEDjFwJYlUI"
                    }
                },
                "credentialConfigurationId": "VerifiablePortableDocumentA1_jwt_vc",
                "credentialData": {
                    "@context": [
                        "https://www.w3.org/2018/credentials/v1"
                    ],
                    "id": "https://www.w3.org/2018/credentials/v1",
                    "type": [
                        "VerifiableCredential",
                        "VerifiableAttestation",
                        "VerifiablePortableDocumentA1"
                    ],
                    "issuer": "did:ebsi:zf39qHTXaLrr6iy3tQhT3UZ",
                    "issuanceDate": "2020-03-10T04:24:12Z",
                    "credentialSubject": {
                        "id": "did:key:z2dmzD81cgPx8Vki7JbuuMmFYrWPgYoytykUZ3eyqht1j9KbrvQgsKodq2xnfBMYGk99qtunHHQuvvi35kRvbH9SDnue2ZNJqcnaU7yAxeKqEqDX4qFzeKYCj6rdbFnTsf4c8QjFXcgGYS21Db9d2FhHxw9ZEnqt9KPgLsLbQHVAmNNZoz",
                        "section1": {
                            "personalIdentificationNumber": "1",
                            "sex": "01",
                            "surname": "Kamau",
                            "forenames": "Johnstone",
                            "dateBirth": "1985-08-15",
                            "nationalities": [
                                "BE"
                            ],
                            "stateOfResidenceAddress": {
                                "streetNo": "sss, nnn ",
                                "postCode": "ppp",
                                "town": "ccc",
                                "countryCode": "BE"
                            },
                            "stateOfStayAddress": {
                                "streetNo": "sss, nnn ",
                                "postCode": "ppp",
                                "town": "ccc",
                                "countryCode": "BE"
                            }
                        },
                        "section2": {
                            "memberStateWhichLegislationApplies": "DE",
                            "startingDate": "2022-10-09",
                            "endingDate": "2022-10-29",
                            "certificateForDurationActivity": true,
                            "determinationProvisional": false,
                            "transitionRulesApplyAsEC8832004": false
                        },
                        "section3": {
                            "postedEmployedPerson": false,
                            "employedTwoOrMoreStates": false,
                            "postedSelfEmployedPerson": true,
                            "selfEmployedTwoOrMoreStates": true,
                            "civilServant": true,
                            "contractStaff": false,
                            "mariner": false,
                            "employedAndSelfEmployed": false,
                            "civilAndEmployedSelfEmployed": true,
                            "flightCrewMember": false,
                            "exception": false,
                            "exceptionDescription": "",
                            "workingInStateUnder21": false
                        },
                        "section4": {
                            "employee": false,
                            "selfEmployedActivity": true,
                            "nameBusinessName": "1",
                            "registeredAddress": {
                                "streetNo": "1, 1 1",
                                "postCode": "1",
                                "town": "1",
                                "countryCode": "DE"
                            }
                        },
                        "section5": {
                            "noFixedAddress": true
                        },
                        "section6": {
                            "name": "National Institute for the Social Security of the Self-employed (NISSE)",
                            "address": {
                                "streetNo": "Quai de Willebroeck 35",
                                "postCode": "1000",
                                "town": "Bruxelles",
                                "countryCode": "BE"
                            },
                            "institutionID": "NSSIE/INASTI/RSVZ",
                            "officeFaxNo": "",
                            "officePhoneNo": "0800 12 018",
                            "email": "info@rsvz-inasti.fgov.be",
                            "date": "2022-10-28",
                            "signature": "Official signature"
                        }
                    }
                },
                "mapping": {
                    "id": "<uuid>",
                    "issuer": "<issuerDid>",
                    "credentialSubject": {
                        "id": "<subjectDid>"
                    },
                    "issuanceDate": "<timestamp-ebsi>",
                    "issued": "<timestamp-ebsi>",
                    "validFrom": "<timestamp-ebsi>",
                    "expirationDate": "<timestamp-ebsi-in:365d>",
                    "credentialSchema": {
                        "id": "https://api-conformance.ebsi.eu/trusted-schemas-registry/v3/schemas/z5qB8tydkn3Xk3VXb15SJ9dAWW6wky1YEoVdGzudWzhcW",
                        "type": "FullJsonSchemaValidator2021"
                    }
                },
                "selectiveDisclosure": {
                    "fields": {
                        "credentialSubject": {
                            "sd": false,
                            "children": {
                                "fields": {
                                    "section1": {
                                        "sd": false,
                                        "children": {
                                            "fields": {
                                                "personalIdentificationNumber": {
                                                    "sd": true
                                                },
                                                "sex": {
                                                    "sd": true
                                                },
                                                "surname": {
                                                    "sd": true
                                                },
                                                "forenames": {
                                                    "sd": true
                                                },
                                                "dateBirth": {
                                                    "sd": true
                                                },
                                                "nationalities": {
                                                    "sd": true
                                                },
                                                "stateOfResidenceAddress": {
                                                    "sd": true
                                                },
                                                "stateOfStayAddress": {
                                                    "sd": true
                                                }
                                            }
                                        }
                                    },
                                    "section3": {
                                        "sd": false,
                                        "children": {
                                            "fields": {
                                                "postedEmployedPerson": {
                                                    "sd": true
                                                },
                                                "employedTwoOrMoreStates": {
                                                    "sd": true
                                                },
                                                "postedSelfEmployedPerson": {
                                                    "sd": true
                                                },
                                                "selfEmployedTwoOrMoreStates": {
                                                    "sd": true
                                                },
                                                "civilServant": {
                                                    "sd": true
                                                },
                                                "contractStaff": {
                                                    "sd": true
                                                },
                                                "mariner": {
                                                    "sd": true
                                                },
                                                "employedAndSelfEmployed": {
                                                    "sd": true
                                                },
                                                "civilAndEmployedSelfEmployed": {
                                                    "sd": true
                                                },
                                                "flightCrewMember": {
                                                    "sd": true
                                                },
                                                "exception": {
                                                    "sd": true
                                                },
                                                "exceptionDescription": {
                                                    "sd": true
                                                },
                                                "workingInStateUnder21": {
                                                    "sd": true
                                                }
                                            }
                                        }
                                    },
                                    "section4": {
                                        "sd": false,
                                        "children": {
                                            "fields": {
                                                "employee": {
                                                    "sd": true
                                                },
                                                "selfEmployedActivity": {
                                                    "sd": true
                                                },
                                                "nameBusinessName": {
                                                    "sd": true
                                                },
                                                "registeredAddress": {
                                                    "sd": true
                                                }
                                            }
                                        }
                                    },
                                    "section5": {
                                        "sd": false,
                                        "children": {
                                            "fields": {
                                                "noFixedAddress": {
                                                    "sd": true
                                                }
                                            }
                                        }
                                    },
                                    "section6": {
                                        "sd": false,
                                        "children": {
                                            "fields": {
                                                "name": {
                                                    "sd": true
                                                },
                                                "address": {
                                                    "sd": true
                                                },
                                                "institutionID": {
                                                    "sd": true
                                                },
                                                "officeFaxNo": {
                                                    "sd": true
                                                },
                                                "officePhoneNo": {
                                                    "sd": true
                                                },
                                                "email": {
                                                    "sd": true
                                                },
                                                "date": {
                                                    "sd": true
                                                },
                                                "signature": {
                                                    "sd": true
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "issuerDid": "did:ebsi:zf39qHTXaLrr6iy3tQhT3UZ"
            };
            // Make the API request
            const response = await fetch('http://139.59.15.151:7002/openid4vc/sdjwt/issue', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            // Get the response as text since it might not be JSON
            const responseText = await response.text();
            
            // Display success message
            statusDiv.className = 'success';
            statusDiv.textContent = 'Success! Your Testa Gava farmer digital ID has been issued.';
            
            // Display the credential details with link
            credentialDetailsDiv.style.display = 'block';
            credentialDetailsDiv.innerHTML = '';
            
            // Try to treat the response as a link
            if (responseText.trim().startsWith('openid-credential')) {
                // Show it as copyable text
                const linkElement = createLinkElement(responseText.trim());
                credentialDetailsDiv.appendChild(linkElement);
            } else {
                // Display the raw response
                try {
                    credentialDetailsDiv.innerHTML = `
                        <h3>Your Credential Details</h3>
                        <p>Issued to: Johnstone Kamau</p>
                        <p>Issued on: ${new Date().toLocaleDateString()}</p>
                        <p>Server Response:</p>
                        <div class="link-box">${responseText}</div>
                    `;
                } catch (e) {
                    
                }
            }
        } catch (error) {
            // Display error message
            statusDiv.className = 'error';
            statusDiv.innerHTML = `
                <p><strong>Error:</strong> ${error.message || 'Failed to issue digital ID.'}</p>
                <p>Please try again later or contact support if the problem persists.</p>
            `;
            console.error('Error:', error);
        } finally {
            // Re-enable the button
            issueButton.disabled = false;
        }
    });
});