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

GAME_TYPE_CHOICES = (
    (game_type, game_type) for game_type in NODES_CONFIG["game"]["types"]
)

GAME_SUBTYPE_CHOICES = (
    (game_subtype, game_subtype) for game_subtype in NODES_CONFIG["game"]["subtypes"]
)

META_TYPE_CHOICES = (
    (meta_type, meta_type) for meta_type in NODES_CONFIG["meta"]["types"]
)
