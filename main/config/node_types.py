META_TYPES = ("comment", "text")

SCORE_TYPES = (
    "entry",
    "position",
    "guardpass",
    "guardpull",
    "submission",
    "takedown",
    "sweep",
    "transition",
)
SCORE_SUBTYPES = ("user", "opponent")

META_NODE_TYPES = ((f"meta-{t}", f"meta-{t}") for t in META_TYPES)
SCORE_NODE_TYPES = (
    (f"score-{t}-{s}", f"score-{t}-{s}") for t in SCORE_TYPES for s in SCORE_SUBTYPES
)

NODE_TYPES = list(SCORE_NODE_TYPES) + list(META_NODE_TYPES)
