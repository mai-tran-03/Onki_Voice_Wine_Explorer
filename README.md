# Onki Voice Wine Explorer

### Run webapp
* Download `index.html`
* Open that file in Chrome/Safari

## Objective
Given a wine catalog dataset as the primary source of truth, create a chatbot answering the user's questions solely based on the dataset.

## App desired functions:
* load the linked dataset as its source of truth
* accept a user question by voice
* display the answer on screen
* speak the answer aloud
* keep answers grounded in the provided wine data
* handle unsupported or ambiguous questions reasonably

## Feature and implementation
* Loads wine data
    * Fetches your Google Sheet as CSV and converts to JS
* Voice input
    * Web Speech API — tap mic to speak, tap again to stop
* Voice bot answers
    * Asks your question, bot answers with locally coded logic using the dataset
* Displays answer
	* Shows your question and the sommelier's answer as cards
* Speaks answer	
    * Text-to-speech plays automatically
    * "Hear it again" button to replay
* Grounded answers
	* Explicitly only use the dataset, not invent wines
* Handles edge cases
	* Ambiguous → bot only gives answers using smart keyword matching; Off-topic → politely redirects with some hint keywords