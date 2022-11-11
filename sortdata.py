import json
import string

from User import User, UserMessage
from chatdata import InitializeChatDownloader
from typing import List, Dict
import psycopg2 as pg
import psycopg2.extensions as pg_ext
from typing import Optional, List, Any


def mostactiveusers(data: InitializeChatDownloader) -> List[User]:
    """
    Find the most active user in the chat.
    If tied, return all the most active users.
    :param data:
    :return:
    """
    mostactive = []
    users = data.get_all_users()
    for user in users:
        if len(mostactive) == 0:
            mostactive.append(user)
        else:
            for active in mostactive:
                if len(user.get_messageids()) > len(active.get_messageids()):
                    mostactive.pop(0)
                    if user not in mostactive:
                        mostactive.append(user)
                elif len(user.get_messageids()) == len(active.get_messageids())\
                        and user not in mostactive:
                    mostactive.append(user)
    return mostactive


def frequent_word(data: InitializeChatDownloader, n: int) -> Dict[str, int]:
    """
    Find the n number of most common words in the livestream.
    Return a list of those words.
    """
    top_words = {}
    usermessages = data.get_all_msgs()
    all_words = {}
    sorted_all_words = {}

    if len(usermessages) == 0:
        return {}
    for usermessage in usermessages:
        message = usermessage.get_usermsg().\
            translate(str.maketrans("", "", string.punctuation)).lower()
        #  All messages with no punctuation and capitalization
        words = message.split()
        for word in words:
            if word not in all_words:
                all_words[word] = 1
            else:
                all_words[word] += 1
    reverse_values = sorted(all_words.values(), reverse=True)

    for i in reverse_values:
        for word in all_words:
            if all_words[word] == i:
                sorted_all_words[word] = all_words[word]
    i = 0
    for word in sorted_all_words:
        if i == n:
            return top_words

        top_words[word] = sorted_all_words[word]
        i += 1

    return top_words

yes = InitializeChatDownloader("https://www.twitch.tv/subroza/clip/ChillyAmericanAmazonMau5-5ECUjkvRhx3RarKr?filter=clips&range=7d&sort=time")

one = yes.initializeUserMsg()
two = yes.initializeUsers()

print(frequent_word(yes, 10))
