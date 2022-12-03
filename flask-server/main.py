import json
from User import User, UserMessage
from typing import List, Dict
from chat_downloader import ChatDownloader
import chatdata

def removed_repeated(message: list) -> list:
    unique_messages = []

    for msg in message:
        if not msg in unique_messages:
            unique_messages.append(msg)

    return unique_messages


with open('chat.json') as chat_file:
    chat_data = json.load(chat_file)

    # taking messages and time from json
    dict = {}
    for obj in chat_data:

        # defining msg and time as string
        msg = obj.get('message')
        time = obj.get('time_text').replace(":", "")
        author = obj.get('author')
        userid = author["name"]  # User username

        user = User(userid)


        # Remove repeated words
        if len(msg) >= 2:
            unique_msg = removed_repeated(msg)
        else:
            unique_msg = msg

        # combining time (int) and message (str) as object in dict
        dict[int(time)] = unique_msg

    # creating list of sublists with messages sent within 10 second time frame
    sub = []
    full = []
    intervaltime = 10

    for time_msgs in dict.items():
        timevalue = time_msgs[0]
        messages = time_msgs[1]
        if timevalue < intervaltime:
            # removing colons from messages
            seperate_emotes_list = messages.split('::')
            sub.append(seperate_emotes_list)
        else:
            # seperating each word
            full.append(sum(sub, []))
            intervaltime = intervaltime + 10
            sub = []

    # cleans full list by removing empty sublists
    new_full = []
    for sublist in full:
        if sublist != []:
            new_full.append(sublist)

    print(new_full)

# Problem, what do about messages that are sentences etc.
# Ensure that the length of "message" is greater than 1 before using method
