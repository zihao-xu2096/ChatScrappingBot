from abc import ABC
from flask import Flask, request, jsonify
from AbstractControllers import Link
from server import twitchlink


class TwitchController:
    """
    """

    def __init__(self, url) -> None:
        super().__init__(url)

    def get_link(self) -> str:
        if len(self.url) > 0:
            return self.url
        else:
            return "No link available."


print(twitchlink)
