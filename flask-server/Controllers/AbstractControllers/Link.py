from abc import ABC
from flask import Flask, request, jsonify


class Link(ABC):
    """
    An abstract class that stores the link of a livestream in <url>.

    """
    url: str

    def __init__(self) -> None:
        self.url = ""

    def get_link(self):
        pass
