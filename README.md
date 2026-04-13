# Onki Voice Wine Explorer

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
    * Fetches your Google Sheet as CSV on page load
* Voice input
    * Web Speech API — tap mic to speak, tap again to stop
* AI answers
    * Sends your question + the full wine dataset to Gemini 2.0 Flash (free)
* Displays answer
	* Shows your question and the sommelier's answer as cards
* Speaks answer	
    * Text-to-speech plays automatically
    * "Hear it again" button to replay
* Grounded answers
	* Prompt explicitly tells Gemini to only use the dataset, not invent wines
* Handles edge cases
	* Ambiguous → Gemini interprets and states its interpretation; Off-topic → politely redirects