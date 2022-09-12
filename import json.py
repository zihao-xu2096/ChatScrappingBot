import json
from chat_downloader import ChatDownloader

from logging.config import dictConfig

url = "https://www.youtube.com/watch?v=ee5jkEXRm2c&ab_channel=GawrGuraCh.hololive-EN"
chat = ChatDownloader().get_chat(url)
for msg in chat:
    message = msg.get("message")
    print(message.split())

with open('chat.json') as chat_file:
    chat_data = json.load(chat_file)

    # taking messages and time from json
    dict = {}
    for obj in chat_data:

        # defining msg and time as string
        msg = obj.get('message')
        time = obj.get('time_text').replace(":", "")

        # combining time (int) and message (str) as object in dict
        dict[int(time)] = msg

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

def removed_repeated(message: list) -> list:
    unique_messages = []
    for msg in message:
        if not msg in unique_messages:
            unique_messages.append(msg)



    return unique_messages
