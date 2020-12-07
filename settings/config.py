STROKE = "#333333"
STROKE_WIDTH = 2
USER_OPACITY = 90
OPPONENT_OPACITY = 60

COMMON_NODE_PROPS = {
    "stroke": "#333333",
    "stroke_width": 2,
    "user_opacity": 90,
    "opponent_opacity": 60,
}

POSITION = {
    "game_type": "position",
    "shape_id": "#square",
    "fill": "#ad560e",
    "stroke": STROKE,
    "stroke_width": STROKE_WIDTH,
}

SUBMISSION = {
    "game_type": "submission",
    "shape_id": "#complex-circle",
    "fill": "#f53337",
    "stroke": STROKE,
    "stroke_width": STROKE_WIDTH,
}

TRANSITION = {
    "game_type": "transition",
    "shape_id": "#skinny-rectangle",
    "fill": "#9f4ae0",
    "stroke": STROKE,
    "stroke_width": STROKE_WIDTH,
}

ENTRY = {
    "game_type": "entry",
    "shape_id": "#hexagon-pointed",
    "fill": "#86fa5c",
    "stroke": STROKE,
    "stroke_width": STROKE_WIDTH,
}

TAKEDOWN = {
    "game_type": "takedown",
    "shape_id": "#trapezoid",
    "fill": "#86fade",
    "stroke": STROKE,
    "stroke_width": STROKE_WIDTH,
}

SWEEP = {
    "game_type": "sweep",
    "shape_id": "#trapezoid-flipped",
    "fill": "#bd1eba",
    "stroke": STROKE,
    "stroke_width": STROKE_WIDTH,
}

GUARD_PULL = {
    "game_type": "guardPull",
    "shape_id": "#hexagon",
    "fill": "#35aef0",
    "stroke": STROKE,
    "stroke_width": STROKE_WIDTH,
}

GUARD_PASS = {
    "game_type": "guardPass",
    "shape_id": "#hexagon",
    "fill": "#c2b010",
    "stroke": STROKE,
    "stroke_width": STROKE_WIDTH,
}

TEXT = {
    "meta_type": "text",
    "shape_id": "#square",
    "fill": "transparent",
    "opacity": "0",
    "stroke": "transparent",
    "stroke_width": "0",
}

COMMENT = {
    "meta_type": "comment",
    "shape_id": "#square",
    "fill": "#bbbbbb",
    "opacity": USER_OPACITY,
    "stroke": STROKE,
    "stroke_width": STROKE_WIDTH,
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
    dict(node_shape, game_subtype="user", opacity=USER_OPACITY)
    for node_shape in BASE_GAME_NODES_SETTINGS
]

OPPONENT_GAME_NODES_SETTINGS = [
    dict(node_shape, game_subtype="opponent", opacity=OPPONENT_OPACITY)
    for node_shape in BASE_GAME_NODES_SETTINGS
]

GAME_NODES_SETTINGS = USER_GAME_NODES_SETTINGS + OPPONENT_GAME_NODES_SETTINGS
META_NODES_SETTINGS = [COMMENT, TEXT]
