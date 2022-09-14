from typing import List


class User:
    """
    A livestream viewer with private attributes message and name
    """
    _name: str
    _messages: List[str]
    # Might have to change messages to dict for time intervals as keys

    def __init__(self, name: str) -> None:
        self._name = name
        self._messages = []

    def add_message(self, message: str) -> None:
        self._messages.append(message)
