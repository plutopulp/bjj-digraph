COMMON_NODE_PROPS = {
    "stroke": "#333333",
    "stroke_width": 2,
    "user_opacity": 90,
    "opponent_opacity": 60,
}

POSITION = {
    "game_type": "position",
    "shape_id": "square",
    "type_text": "New Position",
    "fill": "#ad560e",
    "stroke": COMMON_NODE_PROPS["stroke"],
    "stroke_width": COMMON_NODE_PROPS["stroke_width"],
}

SUBMISSION = {
    "game_type": "submission",
    "shape_id": "complex-circle",
    "type_text": "New Submission",
    "fill": "#f53337",
    "stroke": COMMON_NODE_PROPS["stroke"],
    "stroke_width": COMMON_NODE_PROPS["stroke_width"],
}

TRANSITION = {
    "game_type": "transition",
    "shape_id": "skinny-rectangle",
    "type_text": "New Transition",
    "fill": "#9f4ae0",
    "stroke": COMMON_NODE_PROPS["stroke"],
    "stroke_width": COMMON_NODE_PROPS["stroke_width"],
}

ENTRY = {
    "game_type": "entry",
    "shape_id": "hexagon-pointed",
    "type_text": "New Entry",
    "fill": "#86fa5c",
    "stroke": COMMON_NODE_PROPS["stroke"],
    "stroke_width": COMMON_NODE_PROPS["stroke_width"],
}

TAKEDOWN = {
    "game_type": "takedown",
    "shape_id": "trapezoid",
    "type_text": "New Takedown",
    "fill": "#86fade",
    "stroke": COMMON_NODE_PROPS["stroke"],
    "stroke_width": COMMON_NODE_PROPS["stroke_width"],
}

SWEEP = {
    "game_type": "sweep",
    "shape_id": "trapezoid-flipped",
    "type_text": "New Sweep",
    "fill": "#bd1eba",
    "stroke": COMMON_NODE_PROPS["stroke"],
    "stroke_width": COMMON_NODE_PROPS["stroke_width"],
}

GUARD_PULL = {
    "game_type": "guardPull",
    "shape_id": "hexagon",
    "type_text": "New Guard-Pull",
    "fill": "#35aef0",
    "stroke": COMMON_NODE_PROPS["stroke"],
    "stroke_width": COMMON_NODE_PROPS["stroke_width"],
}

GUARD_PASS = {
    "game_type": "guardPass",
    "shape_id": "hexagon",
    "type_text": "New Guard-Pass",
    "fill": "#c2b010",
    "stroke": COMMON_NODE_PROPS["stroke"],
    "stroke_width": COMMON_NODE_PROPS["stroke_width"],
}

TEXT = {
    "meta_type": "text",
    "shape_id": "square",
    "type_text": "New Text",
    "fill": "transparent",
    "opacity": "0",
    "stroke": "transparent",
    "stroke_width": "0",
}

COMMENT = {
    "meta_type": "comment",
    "shape_id": "square",
    "type_text": "New Comment",
    "fill": "#bbbbbb",
    "opacity": COMMON_NODE_PROPS["user_opacity"],
    "stroke": COMMON_NODE_PROPS["stroke"],
    "stroke_width": COMMON_NODE_PROPS["stroke_width"],
}

BASE_GAME_NODES_SETTINGS = [
    POSITION,
    SUBMISSION,
    TRANSITION,
    ENTRY,
    TAKEDOWN,
    SWEEP,
    GUARD_PULL,
    GUARD_PASS,
]

USER_GAME_NODES_SETTINGS = [
    dict(node_shape, game_subtype="user", opacity=COMMON_NODE_PROPS["user_opacity"])
    for node_shape in BASE_GAME_NODES_SETTINGS
]

OPPONENT_GAME_NODES_SETTINGS = [
    dict(
        node_shape,
        game_subtype="opponent",
        opacity=COMMON_NODE_PROPS["opponent_opacity"],
    )
    for node_shape in BASE_GAME_NODES_SETTINGS
]

GAME_NODES_SETTINGS = USER_GAME_NODES_SETTINGS + OPPONENT_GAME_NODES_SETTINGS
META_NODES_SETTINGS = [COMMENT, TEXT]
