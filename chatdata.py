import json
from User import User, UserMessage
from typing import List, Dict
from chat_downloader import ChatDownloader
from logging.config import dictConfig


class InitializeChatDownloader:
    """
    A class used to initialize the chatdata and grab messages
    from chat_downloader
    """
    _usermsg = [UserMessage]
    _users = List[User]
    url = str

    def __init__(self, url: str):
        self.url = url
        self._usermsg = []
        self._users = []

    def initializeUserMsg(self) -> bool:
        chat = ChatDownloader().get_chat(self.url)
        for msg in chat:
            usermsg = UserMessage(msg['author']['id'])
            usermsg.add_message(msg.get("message"))
            usermsg.add_message_id(msg.get("message_id"))
            usermsg.add_senderinfo(msg.get("author"))
            usermsg.add_message_timestamp(msg.get("time_text"))
            self._usermsg.append(usermsg)  # Store all user messages

        if len(self._usermsg) >= 1:
            return True
        return True

    def initializeUsers(self) -> bool:
        users = {}  # Temp store users
        if len(self._usermsg) == 0:
            return False
        for usermsg in self._usermsg:
            userid = usermsg.get_userid

            if userid in users:
                users[userid].append(usermsg.get_usermsg)
            else:
                users[userid] = [usermsg.get_messageid]

        for userid in users:
            user = User(userid)
            user.add_messageids(users[userid])
            self._users.append(user)
        return True

    def get_all_users(self) -> List[User]:
        return self._users

    def get_all_msgs(self) -> List[UserMessage]:
        return self._usermsg


yes = InitializeChatDownloader(
    "https://www.twitch.tv/subroza/clip/ChillyAmericanAmazonMau5-5ECUjkvRhx3RarKr?filter=clips&range=7d&sort=time")

one = yes.initializeUserMsg()
two = yes.initializeUsers()
print(len(yes._usermsg))
print(yes._usermsg[2].get_username())
print(len(yes._users))
for i in range(0, len(yes._users)):
    print(yes._users[i]._id())
