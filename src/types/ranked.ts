export type Match = {
  status: string;
  data: {
    id: number;
    type: number;
    seed: Seed;
    category: string;
    gameMode: string;
    players: Player[];
    spectators: Player[];
    result: Result;
    forfeited: boolean;
    decayed: boolean;
    rank: Rank;
    vod: any[];
    changes: any[];
    completions: Result[];
    timelines: Timeline[];
    beginner: boolean;
    botSource: null;
    season: number;
    date: number;
    seedType: null;
    bastionType: null;
    tag: null;
    replayExist: boolean;
  };
};

export type Result = {
  uuid: string | null;
  time: number;
};

export type Player = {
  uuid: string;
  nickname: string;
  roleType: number;
  eloRate: number | null;
  eloRank: number | null;
  country: string;
};

export type Rank = {
  season: null;
  allTime: null;
};

export type Seed = {
  id: null;
  overworld: null;
  nether: null;
  endTowers: null;
  variations: any[];
};

export type Timeline = {
  uuid: string;
  time: number;
  type: TimelineType;
};

export type TimelineType =
  | "adventure.kill_a_mob"
  | "adventure.ol_betsy"
  | "adventure.root"
  | "adventure.shoot_arrow"
  | "end.kill_dragon"
  | "end.root"
  | "husbandry.plant_seed"
  | "husbandry.root"
  | "nether.charge_respawn_anchor"
  | "nether.distract_piglin"
  | "nether.find_bastion"
  | "nether.find_fortress"
  | "nether.get_wither_skull"
  | "nether.loot_bastion"
  | "nether.obtain_blaze_rod"
  | "nether.obtain_crying_obsidian"
  | "nether.return_to_sender"
  | "nether.root"
  | "projectelo.timeline.blind_travel"
  | "projectelo.timeline.death_spawnpoint"
  | "projectelo.timeline.death"
  | "projectelo.timeline.dragon_death"
  | "projectelo.timeline.reset"
  | "story.enter_the_end"
  | "story.enter_the_nether"
  | "story.follow_ender_eye"
  | "story.form_obsidian"
  | "story.iron_tools"
  | "story.lava_bucket"
  | "story.mine_diamond"
  | "story.mine_stone"
  | "story.obtain_armor"
  | "story.root"
  | "story.smelt_iron";
