from typing import List, Type


class User:
    """
    A User defined by their ID. Contains user information including:
    - ID
    - Username
    - MessageIDs
    """
    _id: int
    _messageids: List

    def __init__(self, userid: int) -> None:
        self._id = userid
        self._username = str
        self._messageids = []

    def add_messageids(self, message: List[int]) -> None:
        for ids in message:
            self._messageids.append(ids)
        return None

    def get_userid(self) -> int:
        return self._id

    def get_messageids(self) -> list:
        return self._messageids


class UserMessage:
    """
    A livestream viewer with private attributes message and name
    """
    # Might have to change messages to dict for time intervals as keys

    def __init__(self, userid) -> None:
        self._id = userid
        self._username = str
        self._authorinfo = dict
        self._message = str
        self._message_id = str
        self._timestamp = str

    def add_message(self, message: str) -> None:
        self._message = message

    def add_message_id(self, msg_id: int) -> None:
        self._message_id = msg_id

    def add_message_timestamp(self, timestamp: str) -> None:
        self._timestamp = timestamp

    def add_senderinfo(self, info: dict) -> None:
        self._authorinfo = info

    def get_userid(self) -> int:
        return self._id

    def get_username(self) -> str:
        return str(self._authorinfo["name"])

    def get_usermsg(self) -> str:
        return str(self._message)

    def get_timestamp(self) -> str:
        return str(self._timestamp)

    def get_messageid(self) -> str:
        return str(self._message_id)
