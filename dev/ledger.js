let ledgerBasic = {
	"tx1":{
		"sender":"p1ID",
		"receiver":"p2ID",
		"amount":4
	},

	"tx2":{
		"sender":"T1ID",
		"receiver":"p2ID",
		"amount":4
	},

	"tx3":{
		"sender":"p1ID",
		"receiver":"p2ID",
		"amount":4
	},

	"tx4":{
		"sender":"Bob",
		"receiver":"Sarah",
		"amount":4
	},
	"tx5":{
		"sender":"p1ID",
		"receiver":"p2ID",
		"amount":4
	},

	"tx6":{
		"sender":"p1ID",
		"receiver":"p2ID",
		"amount":4
	},
	"tx7":{
		"sender":"p1ID",
		"receiver":"p2ID",
		"amount":4
	},

	"tx8":{
		"sender":"p1ID",
		"receiver":"p2ID",
		"amount":4
	},
	"tx9":{
		"sender":"p1ID",
		"receiver":"p2ID",
		"amount":4
	},

	"tx10":{
		"sender":"p1ID",
		"receiver":"p2ID",
		"amount":4
	},
}

let ledgerSafe ={

	"Block1":{
		"prevHash":"00000",
		"tx":{
			"sender":"p1ID",
			"receiver":"p2ID",
			"amount":4
		},
		"chainHash":"00100"
	},
	"Block2":{
		"prevHash":"00100",
		"tx":{
			"sender":"p1ID",
			"receiver":"p2ID",
			"amount":4
		},
		"chainHash":"23000"
	},

	"Block3":{
		"prevHash":"23000",
		"tx":{
			"sender":"p1ID",
			"receiver":"p2ID",
			"amount":4
		},
		"chainHash":"45869"
	},

	"Block4":{
		"prevHash":"45869",
		"tx":{
			"sender":"p1ID",
			"receiver":"p2ID",
			"amount":4
		},
		"chainHash":"76543"
	},
}


export {ledgerBasic}

/**
 * ledger with multiple txs per block
 * proof mechanism to guarantee consensus
 * attack resistant
 * 
 *
 *
 *
 *
 * **/
