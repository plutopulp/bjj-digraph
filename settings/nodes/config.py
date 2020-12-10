NODES_CONFIG = {
    "game": {
        "types": (
            "position",
            "submission",
            "entry",
            "transition",
            "sweep",
            "takedown",
            "guardPull",
            "guardPass",
        ),
        "subtypes": ("user", "opponent"),
        "model": "GameNode",
        "serializer_class": "GameNodeSerializer",
    },
    "meta": {
        "types": ("comment", "text"),
        "model": "MetaNode",
        "serializer_class": "MetaNodeSerializer",
    },
}
